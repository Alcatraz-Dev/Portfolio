// import { NextRequest, NextResponse } from 'next/server'
// import { ImageResponse } from '@vercel/og'

// // export const config = {
// //   runtime: 'edge',
// // }

// export default function handler(req: NextRequest) {
//   const { searchParams, protocol, host } = new URL(req.url)
//   const title = searchParams.get('title') || 'Haythem Dhahri | Portfolio'
//   const author = searchParams.get('author') || 'Haythem Dhahri '
//   const dateformat = searchParams.get('date') 
//   const cover = searchParams.get('cover')


// const date = new Date().toJSON().slice(0, 10);


//   const coverUrl =
//     cover &&( "./LogoImage.png")
   

//   return new ImageResponse(
//     (
//       <div tw="w-full h-full flex flex-col justify-end items-stretch justify-end bg-slate-200">
//         {coverUrl && (
//           <img
//             src={coverUrl}
//             alt=""
//             tw="w-full h-full"
//             style={{ objectFit: 'cover', objectPosition: 'center' }}
//           />
//         )}
//         <div tw="bg-white flex flex-col p-8">
//           <div tw="text-5xl mb-2">{title}</div>
//           <div tw="text-2xl">
//             {author +
//               ' – ' +
//               new Date().toJSON().slice(0, 10)}
//           </div>
//         </div>
//       </div>
//     ),
//     { width: 1200, height: 628 }
//   )
// }
import React from "react";

function og() {
  return <div>og</div>;
}

export default og;
