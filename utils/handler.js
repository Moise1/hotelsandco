import { render } from "@testing-library/react";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import {rest} from 'msw';
import {roomData} from '../__mocks__/roomMockData'

export const handlers = [
    rest.get('*/rooms', (req, res, ctx) => {
       return res(
           ctx.status(2000),
           ctx.json({
               data: roomData.data
           })
       )
    })
]

const testQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
})

export const renderwithComp = (comp) =>{
  const {rerender, ...result} = render(
      <QueryClientProvider client={testQueryClient}>
        {comp}
      </QueryClientProvider>
  )
  return {
      ...result,
      rerender: (rerenderComp) => rerender(
        <QueryClientProvider client={testQueryClient}>
        {rerenderComp}
      </QueryClientProvider>
      )
  }
}