(function(b,c){var a=function(e){var d=this;this.rpt=null;this.init=function(){var f=new XMLHttpRequest();f.open("GET",e.authServerUrl+"/realms/"+e.realm+"/.well-known/uma-configuration");f.onreadystatechange=function(){if(f.readyState==4){if(f.status==200){d.config=JSON.parse(f.responseText)}else{console.error("Could not obtain configuration from server.")}}};f.send(null)};this.authorize=function(f){this.then=function(h,m,k){if(f.indexOf("UMA")!=-1){var o=f.split(",");for(i=0;i<o.length;i++){var n=o[i].split("=");if(n[0]=="ticket"){var j=new XMLHttpRequest();j.open("POST",d.config.rpt_endpoint,true);j.setRequestHeader("Content-Type","application/json");j.setRequestHeader("Authorization","Bearer "+e.token);j.onreadystatechange=function(){if(j.readyState==4){var p=j.status;if(p>=200&&p<300){var q=JSON.parse(j.responseText).rpt;d.rpt=q;h(q)}else{if(p==403){if(m){m()}else{console.error("Authorization request was denied by the server.")}}else{if(k){k()}else{console.error("Could not obtain authorization data from server.")}}}}};var l=n[1].substring(1,n[1].length-1).trim();j.send(JSON.stringify({ticket:l,rpt:d.rpt}))}}}else{if(f.indexOf("KC_ETT")!=-1){var o=f.substring("KC_ETT".length).trim().split(",");var g=null;for(i=0;i<o.length;i++){var n=o[i].split("=");if(n[0]=="realm"){g=n[1].substring(1,n[1].length-1).trim()}}d.entitlement(g).then(h,m,k)}}};return this};this.entitlement=function(g,f){this.then=function(j,m,l){var k=new XMLHttpRequest();k.onreadystatechange=function(){if(k.readyState==4){var n=k.status;if(n>=200&&n<300){var o=JSON.parse(k.responseText).rpt;d.rpt=o;j(o)}else{if(n==403){if(m){m()}else{console.error("Authorization request was denied by the server.")}}else{if(l){l()}else{console.error("Could not obtain authorization data from server.")}}}}};var h=null;if(f){k.open("POST",e.authServerUrl+"/realms/"+e.realm+"/authz/entitlement/"+g,true);k.setRequestHeader("Content-type","application/json");h=JSON.stringify(f)}else{k.open("GET",e.authServerUrl+"/realms/"+e.realm+"/authz/entitlement/"+g,true)}k.setRequestHeader("Authorization","Bearer "+e.token);k.send(h)};return this};this.init(this)};if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=a}else{b.KeycloakAuthorization=a;if(typeof define==="function"&&define.amd){define("keycloak-authorization",[],function(){return a})}}})(window);