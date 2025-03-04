// @ts-nocheck
import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';

import convertNewLines from '../../helpers/convert-new-lines';

const BalancerWrapper = (props: any) => <Balancer {...props} />

type ChatGPTAgent = 'user' | 'system' | 'assistant'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

export const LoadingChatLine = () => ( // carrega animação placeholder
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            Supply Pharma
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
)

export function ChatLine({ role = 'assistant', content }: ChatGPTMessage) {
  let formatteMessage: any = null;
  
  if (!content) {
    return null;
  }
  
  formatteMessage = convertNewLines(content);

  return (
    <div
      className={
        role != 'assistant' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
      <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-1 gap-4">
            <p
              className={clsx(
                'text ',
                role == 'assistant' ? 'font-semibold font- ' : 'text-gray-400'
              )}
            >
              {formatteMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
