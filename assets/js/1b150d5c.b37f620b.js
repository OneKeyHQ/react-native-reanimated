"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8796],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2108:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o={id:"installation",title:"Installation",sidebar_label:"Installation"},l=void 0,s={unversionedId:"installation",id:"version-2.0.x/installation",isDocsHomePage:!1,title:"Installation",description:"Reanimated 2 is primarily built in C++ using Turbo Modules infrastructure which is not yet completely deployed in React Native (specifically on Android).",source:"@site/versioned_docs/version-2.0.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-native-reanimated/docs/2.0.x/installation",version:"2.0.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"version-2.0.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/2.0.x/"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/2.0.x/worklets"}},d=[{value:"I just want to try new Reanimated...",id:"i-just-want-to-try-new-reanimated",children:[]},{value:"Installing the package",id:"installing-the-package",children:[{value:"Reanimated 2 in Expo",id:"reanimated-2-in-expo",children:[]},{value:"Using main branch builds",id:"using-main-branch-builds",children:[]}]},{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[{value:"Proguard",id:"proguard",children:[]}]},{value:"iOS",id:"ios",children:[]}],p={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reanimated 2 is primarily built in C++ using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"},"Turbo Modules")," infrastructure which is not yet completely deployed in React Native (specifically on Android).\nBecause of that the installation of new Reanimated requires additional steps apart from just adding a dependency to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ."),(0,r.kt)("p",null,"As a consequence of the above the minimum supported version of React Native is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/releases/tag/v0.62.0"},"v0.62"),".\nBefore you continue with the installation, make sure that you are running the supported version of React Native."),(0,r.kt)("p",null,"Please follow the below instructions for Android and iOS."),(0,r.kt)("h2",{id:"i-just-want-to-try-new-reanimated"},"I just want to try new Reanimated..."),(0,r.kt)("p",null,"We realize the project setup is very complex and you may not want to add that to your existing app rightaway.\nIf you just want to play with Reanimated 2, we made a clean repo that has all the steps configured so that you can pull it from github and give the new version a shot."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Visit the Playground repo here")," or copy the command below to do a git clone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:software-mansion-labs/reanimated-2-playground.git\n")),(0,r.kt)("p",null,"Continue with the instruction below if you'd like to install Reanimated v2 on an existing or new React Native project."),(0,r.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that Reanimated 2 doesn't support remote debugging, only Flipper can be used for debugging."))),(0,r.kt)("p",null,"First step is to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," alpha as a dependency in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated\n")),(0,r.kt)("h3",{id:"reanimated-2-in-expo"},"Reanimated 2 in Expo"),(0,r.kt)("p",null,"To use experimental support of Reanimated 2 in the Expo managed apps follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/reanimated/"},"their installation instructions"),"."),(0,r.kt)("h3",{id:"using-main-branch-builds"},"Using main branch builds"),(0,r.kt)("p",null,"To use Reanimated 2 built from the main branch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-reanimated/actions?query=workflow%3A%22Build+npm+package%22"},'"Build npm package" workflow in Reanimated repository')),(0,r.kt)("li",{parentName:"ul"},"select latest build and download ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-reanimated-2.0.0-alpha.tgz")," artifact"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"tar zxvf react-native-reanimated-2.0.0-alpha.tgz.zip")," to unpack zip (or unpack it manually)"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn add file:react-native-reanimated-2.0.0-*.tgz")," to install the package"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"cd android && ./gradlew clean"))),(0,r.kt)("h2",{id:"babel-plugin"},"Babel plugin"),(0,r.kt)("p",null,"Add Reanimated's babel plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reanimated plugin has to be listed last."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated/plugin"),' to your project you may encounter a false-positive "Reanimated 2 failed to create a worklet" error. In most cases, this can be fixed by cleaning the application\'s cache. Depending on your workflow or favourite package manager that could be done by:'),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn start --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm start -- --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expo start -c"))),(0,r.kt)("p",{parentName:"div"},"or other."))),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Turn on Hermes engine by editing ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{2}","{2}":!0},"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Plug Reanimated in ",(0,r.kt)("inlineCode",{parentName:"li"},"MainApplication.java"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{1-2,12-15}","{1-2,12-15}":!0},'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n      @Override\n      protected String getJSMainModuleName() {\n        return "index";\n      }\n\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new ReanimatedJSIModulePackage(); // <- add\n      }\n    };\n  ...\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In previous releases, we required an additional step which is turning on Turbo Modules.\nIf you are upgrading from alpha.{ <=3 } please remove the following lines:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"static {\n   ReactFeatureFlags.useTurboModules = true;\n }\n")),(0,r.kt)("p",{parentName:"div"},"from ",(0,r.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),"."))),(0,r.kt)("p",null,"You can refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8"},"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Playground repo"),"."),(0,r.kt)("h3",{id:"proguard"},"Proguard"),(0,r.kt)("p",null,"If you're using Proguard, make sure to add rule preventing it from optimizing Turbomodule classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-keep class com.facebook.react.turbomodule.** { *; }\n")),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," directory."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In previous releases, the installation process was manual and required turning turbo modules on. Some libraries break when turbo modules are enabled so we decided to change our approach and we no longer\nuse the standard way for registering a turbo module. It let us simplify the installation process and as a result, you can safely\nundo all installation steps from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/2.0.0-alpha.4/docs/docs/installation.md#ios"},"previous instruction"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to turn off autoinstall on iOS please add the following compilation flag:\n",(0,r.kt)("inlineCode",{parentName:"p"},"DONT_AUTOINSTALL_REANIMATED"),".\nIt can be done by pasting:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"post_install do |installer|\n   installer.pods_project.targets.each do |target|\n       target.build_configurations.each do |config|\n           config.build_settings['OTHER_CPLUSPLUSFLAGS'] = '-DDONT_AUTOINSTALL_REANIMATED'\n       end\n   end\nend\n")),(0,r.kt)("p",{parentName:"div"},"to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),". Don't forget to run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," after doing that."))))}m.isMDXComponent=!0}}]);