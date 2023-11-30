import { NextRequest, NextResponse } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  const { searchParams, protocol, host } = new URL(req.url)
  const title = searchParams.get('title') || 'Haythem Dhahri | Portfolio'
  const author = searchParams.get('author') || 'Haythem Dhahri '
  const date = searchParams.get('date') || '2023-11-08T12:00:00.000Z'
  const cover = searchParams.get('cover')

  const coverUrl =
    cover &&
    `${protocol}//${host}/_next/image?url=${encodeURIComponent(
      cover
    )}&w=1200&q=75`

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-end items-stretch justify-end bg-slate-200">
        {coverUrl && (
          <img
            src={coverUrl}
            alt=""
            tw="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
        <div tw="bg-white flex flex-col p-8">
          <div tw="text-5xl mb-2">{title}</div>
          <div tw="text-2xl">
            {author +
              ' – ' +
              new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' })}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 628 }
  )
}