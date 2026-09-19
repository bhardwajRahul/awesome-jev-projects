import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { validateAnalytics, analyticsMarkup, analyticsSources, BEACON_SCRIPT, BEACON_ENDPOINT } from "./analytics-policy.mjs";
const config = {enabled:true,provider:"cloudflare",siteToken:"a".repeat(32),scriptUrl:BEACON_SCRIPT,hostname:"logicrw.github.io",pathPrefix:"/awesome-jev-projects/",respectPrivacySignals:true};
const source = await readFile(new URL("../public/analytics.js", import.meta.url), "utf8");
function run({host="logicrw.github.io",path="/awesome-jev-projects/en/",dnt,gpc,duplicate=false}={}) {
  const appended=[];
  const document={currentScript:{dataset:{siteToken:config.siteToken,hostname:config.hostname,pathPrefix:config.pathPrefix}},documentElement:{dataset:{}},querySelector:()=>duplicate?{}:null,createElement:()=>({dataset:{},addEventListener(){}}),head:{append(s){appended.push(s)}}};
  runInNewContext(source,{document,location:{hostname:host,pathname:path},navigator:{doNotTrack:dnt,globalPrivacyControl:gpc},window:{}});
  return {appended,status:document.documentElement.dataset.analytics};
}
test("analytics is opt-in and cannot expand CSP to an arbitrary third party",()=>{
  assert.equal(analyticsMarkup({enabled:false}),"");
  assert.deepEqual(analyticsSources("",config),{script:"",connect:""});
  assert.deepEqual(analyticsSources(analyticsMarkup(config),config),{script:BEACON_SCRIPT,connect:BEACON_ENDPOINT});
  for(const patch of [{scriptUrl:"https://evil.test/tracker.js"},{hostname:"evil.test"},{siteToken:'x" onload="evil()'},{respectPrivacySignals:false}]) assert.throws(()=>validateAnalytics({...config,...patch}));
});
test("analytics sends no request in previews, other paths, DNT/GPC or duplicate loads",()=>{
  for(const option of [{host:"localhost"},{host:"logicrw.github.io.evil.test"},{path:"/other-project/"},{dnt:"1"},{gpc:true},{duplicate:true}]) assert.equal(run(option).appended.length,0);
  assert.equal(run({gpc:true}).status,"privacy-opt-out");
});
test("production installs only the official module with the public site identifier",()=>{
  const {appended}=run();assert.equal(appended.length,1);
  assert.equal(appended[0].src,BEACON_SCRIPT);assert.equal(appended[0].type,"module");
  assert.deepEqual(JSON.parse(appended[0].dataset.cfBeacon),{token:config.siteToken});
  assert.ok(!source.includes("localStorage") && !source.includes("document.cookie"));
});
