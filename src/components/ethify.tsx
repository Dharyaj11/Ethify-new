// import { useState, useEffect } from 'react'
// import { ChevronDown, HelpCircle, Send, Shield, Eye, Search, FileSearch, Lock, Fingerprint, Wifi, Radar, Camera, Crosshair } from 'lucide-react'

// export function Ethify() {
//   const [darkPatterns, setDarkPatterns] = useState('n/a')
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [progress, setProgress] = useState(0)

//   const handleAnalyze = () => {
//     setIsAnalyzing(true)
//     setProgress(0)
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           clearInterval(interval)
//           setIsAnalyzing(false)
//           setDarkPatterns(Math.floor(Math.random() * 20).toString())
//           return 0
//         }
//         return prevProgress + 2
//       })
//     }, 50)
//   }

//   const IconWrapper = ({ children, className, animationName }) => (
//     <div className={`absolute ${className} opacity-20 animate-[${animationName}_20s_linear_infinite]`} style={{ pointerEvents: 'none' }}>
//       {children}
//     </div>
//   )

//   useEffect(() => {
//     const style = document.createElement('style')
//     style.textContent = `
//       @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
//       @keyframes moveTopLeft {
//         0% { transform: translate(0, 0); }
//         25% { transform: translate(-50px, 50px); }
//         50% { transform: translate(-100px, 0); }
//         75% { transform: translate(-50px, -50px); }
//         100% { transform: translate(0, 0); }
//       }
//       @keyframes moveTopRight {
//         0% { transform: translate(0, 0); }
//         25% { transform: translate(50px, 50px); }
//         50% { transform: translate(100px, 0); }
//         75% { transform: translate(50px, -50px); }
//         100% { transform: translate(0, 0); }
//       }
//       @keyframes moveBottomLeft {
//         0% { transform: translate(0, 0); }
//         25% { transform: translate(-50px, -50px); }
//         50% { transform: translate(-100px, 0); }
//         75% { transform: translate(-50px, 50px); }
//         100% { transform: translate(0, 0); }
//       }
//       @keyframes moveBottomRight {
//         0% { transform: translate(0, 0); }
//         25% { transform: translate(50px, -50px); }
//         50% { transform: translate(100px, 0); }
//         75% { transform: translate(50px, 50px); }
//         100% { transform: translate(0, 0); }
//       }
//       @keyframes moveCenter {
//         0% { transform: translate(-50%, -50%) scale(1); }
//         50% { transform: translate(-50%, -50%) scale(1.2); }
//         100% { transform: translate(-50%, -50%) scale(1); }
//       }
//     `
//     document.head.appendChild(style)
//     return () => {
//       document.head.removeChild(style)
//     }
//   }, [])

//   return (
//     <div className="w-96 h-[500px] bg-[#1a2332] text-white p-4 rounded-xl shadow-2xl relative overflow-hidden font-['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif]">
//       {/* Moving background icons */}
//       <IconWrapper className="top-4 left-4" animationName="moveTopLeft">
//         <Search className="w-8 h-8 text-blue-700" />
//       </IconWrapper>
//       <IconWrapper className="top-4 right-4" animationName="moveTopRight">
//         <FileSearch className="w-10 h-10 text-yellow-700" />
//       </IconWrapper>
//       <IconWrapper className="bottom-4 left-4" animationName="moveBottomLeft">
//         <Lock className="w-6 h-6 text-green-700" />
//       </IconWrapper>
//       <IconWrapper className="bottom-4 right-4" animationName="moveBottomRight">
//         <Shield className="w-12 h-12 text-red-700" />
//       </IconWrapper>
//       <IconWrapper className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" animationName="moveCenter">
//         <Eye className="w-16 h-16 text-purple-700" />
//       </IconWrapper>
//       <IconWrapper className="top-1/4 right-1/4" animationName="moveTopRight">
//         <Fingerprint className="w-10 h-10 text-indigo-700" />
//       </IconWrapper>
//       <IconWrapper className="bottom-1/4 left-1/4" animationName="moveBottomLeft">
//         <Wifi className="w-8 h-8 text-cyan-700" />
//       </IconWrapper>
//       <IconWrapper className="top-1/3 left-1/3" animationName="moveTopLeft">
//         <Radar className="w-12 h-12 text-emerald-700" />
//       </IconWrapper>
//       <IconWrapper className="bottom-1/3 right-1/3" animationName="moveBottomRight">
//         <Camera className="w-8 h-8 text-pink-700" />
//       </IconWrapper>
//       <IconWrapper className="top-2/3 left-2/3" animationName="moveTopRight">
//         <Crosshair className="w-10 h-10 text-orange-700" />
//       </IconWrapper>

//       <div className="relative z-10 flex flex-col h-full">
//         <h1 className="text-5xl font-bold text-center mb-6 text-red-500 font-['Monoton']">ETHIFY</h1>
        
//         <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-4 mb-4 shadow-inner relative overflow-hidden">
//           <Shield className="absolute right-2 bottom-2 text-red-500 opacity-20" size={50} />
//           <p className="text-sm text-gray-400">Dark Patterns Detected</p>
//           <p className="text-5xl font-bold">{darkPatterns}</p>
//         </div>
        
//         <button
//           onClick={handleAnalyze}
//           disabled={isAnalyzing}
//           className="w-full bg-red-500 text-white font-bold py-5 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center relative overflow-hidden mb-4 text-xl"
//         >
//           <div className="absolute inset-0 bg-red-600 transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
//           <span className="relative z-10">
//             {isAnalyzing ? 'ANALYZING...' : 'ANALYZE SITE'}
//           </span>
//         </button>
        
//         <div className="relative mb-4">
//           <select className="w-full bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm text-white rounded-lg py-2 px-3 appearance-none border border-gray-700 focus:border-red-500 focus:outline-none transition duration-300 text-sm">
//             <option>All Categories</option>
//             <option>Urgency</option>
//             <option>Misdirection</option>
//             <option>Social Proof</option>
//             <option>Scarcity</option>
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
//         </div>
        
//         <div className="flex-grow flex flex-col justify-end">
//           <div className="text-xs space-y-2 mb-3">
//             <a href="#" className="text-gray-300 hover:text-red-500 flex items-center transition duration-300">
//               <HelpCircle className="mr-1" size={14} />
//               What are dark patterns?
//             </a>
//             <a href="#" className="text-gray-300 hover:text-red-500 flex items-center transition duration-300">
//               <Send className="mr-1" size={14} />
//               Help us improve Ethify
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }