'use strict';
const bundledIcons=new Set(["2600","1f455","1f963","1faa5","1f45f","1f392","1f34e","1f333","1f4d6","1f319","1f9f8","1f4da","1f3b2","261d","23f8","1f499","25b6","2b50","1f9f9","1f381","1f60a","1f642","1f971","1f614","1f623","1f9fa","1f6cf","1f4a7","1f6bf","1f9fc","1f6bd","1f9e6","1f9e5","1f96a","270f","1f3a8","1f3b5","1f9e9","1f436","1f331","1f91d","1f590","1f3c3","1f9d8","1f3e0","1f37d","1f5d1","1f9fd","1f4e6","1f570","1f680","1f33f","1f43e","1f4c5","2699","1f9ed","1f409","1f308","1f389","1f4ab","1fae7","2197"]);
function renderPictures(){if(!window.twemoji)return;for(const target of [document.getElementById('app'),document.getElementById('modal')])if(target)twemoji.parse(target,{callback:icon=>bundledIcons.has(icon)?'./emoji/'+icon+'.svg':false,attributes:()=>({draggable:'false'})});}
const pictureObserver=new MutationObserver(()=>renderPictures());
pictureObserver.observe(document.body,{childList:true,subtree:true});
renderPictures();
