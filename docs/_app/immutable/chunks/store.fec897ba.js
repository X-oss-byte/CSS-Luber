import{c as s}from"./client.fc0d3a94.js";import{r as a,w as o}from"./index.5c41a1e6.js";const u=o(""),n=s("https://api.github.com/repos/:user/:repo").get().query,e=async()=>{let t=await n({user:"artxe2",repo:"css-lube"});if(t.status>299)throw Error("Err:"+t.status);return(await t.json()).stargazers_count},l=a(e(),t=>{let r=setInterval(async()=>t(e()),3e5);return()=>clearInterval(r)});export{l as g,u as t};