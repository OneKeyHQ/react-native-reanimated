"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9503],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},621:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"useAnimatedGestureHandler",title:"useAnimatedGestureHandler",sidebar_label:"useAnimatedGestureHandler"},l=void 0,s={unversionedId:"api/useAnimatedGestureHandler",id:"version-2.0.x/api/useAnimatedGestureHandler",isDocsHomePage:!1,title:"useAnimatedGestureHandler",description:"This hook allows for defining worklet handlers that can serve in a process of handling gestures.",source:"@site/versioned_docs/version-2.0.x/api/useAnimatedGestureHandler.md",sourceDirName:"api",slug:"/api/useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.0.x/api/useAnimatedGestureHandler",version:"2.0.x",frontMatter:{id:"useAnimatedGestureHandler",title:"useAnimatedGestureHandler",sidebar_label:"useAnimatedGestureHandler"},sidebar:"version-2.0.x/docs",previous:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.0.x/api/useAnimatedScrollHandler"},next:{title:"useAnimatedRef",permalink:"/react-native-reanimated/docs/2.0.x/api/useAnimatedRef"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook allows for defining worklet handlers that can serve in a process of handling gestures."),(0,i.kt)("p",null,"Before you can use the hook, make sure that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/#installation"},"installed and configured")," with your project."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"gesturehandlers-object-with-worklets"},(0,i.kt)("inlineCode",{parentName:"h4"},"gestureHandlers")," ","[object with worklets]"),(0,i.kt)("p",null,"The first argument to this hook is an object that can carry one or more worklet handlers.\nThe handlers can be set under the following keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"onStart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onActive"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onEnd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onFail"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onCancel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onFinish"),"."),(0,i.kt)("p",null,"Read more about gesture handling states in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/state"},"Gesture Handler library documentation"),".\nEach of the specified handlers will be triggered depending on the current state of the attached Gesture Handler.\nThe handler worklet will receive the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object carrying the event payload.\nThe payload will be different depending on the type of the Gesture Handler to which the worklet is attached (",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RotationGestureHandler"),", etc.).\nPlease check the documentation section on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/"},"selected handler type")," to learn about the event structure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between events and across worklet handlers for all the selected states and you can read and write any data to it."))),(0,i.kt)("h4",{id:"dependencies-array"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,i.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(0);\n\n  const handler = useAnimatedGestureHandler(\n    {\n      onEnd: (_) => {\n        sv.value = state;\n      },\n    },\n    dependencies\n  );\n  //...\n  return <></>;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,i.kt)("li",{parentName:"ul"},"empty array(",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,i.kt)("li",{parentName:"ul"},"array of values(",(0,i.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks' bodies or in any values from the given array.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The hook returns a handler object that can be attached to one of the gesture handler components provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," library.\nThe handler should be passed under ",(0,i.kt)("inlineCode",{parentName:"p"},"onGestureEvent")," parameter regardless of what gesture states we are interested in processing."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the below example we use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gesture-handlers/pan-gh"},(0,i.kt)("inlineCode",{parentName:"a"},"PanGestureHandler"))," to register for pan gesture events performed on the rendered View.\nWe attach three handler worklets that are going to be triggered when the gesture starts, when it is active and the user is panning, and when the gesture is over.\nWe create a shared value ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," that will correspond to the x-translation of the box.\nIn ",(0,i.kt)("inlineCode",{parentName:"p"},"onStart")," handler worklet we use ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," to save the current value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and therefore remember the place at which the gesture started.\nWhen the user is panning, in ",(0,i.kt)("inlineCode",{parentName:"p"},"onActive")," handler we update the translation by taking the starting point remembered in ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," object and adding the translation that is coming from the gesture.\nFinally, in ",(0,i.kt)("inlineCode",{parentName:"p"},"onEnd")," handler we initiate an animation that'd make the box return to the initial point."),(0,i.kt)("p",null,"Thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," object, where we remember the initial position, the interaction can be made interruptible.\nThat is, we can continue the gesture from the place where we pick up the box, regardless of whether it is in the middle of animating back to the initial point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (_) => {\n      x.value = withSpring(0);\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}c.isMDXComponent=!0}}]);