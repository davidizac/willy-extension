/* eslint-disable camelcase */
import { createClient } from '@supabase/supabase-js'
import * as qs from 'qs'
// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://gcfdbauttuvhaygubowf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmRiYXV0dHV2aGF5Z3Vib3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MDI0OTUsImV4cCI6MTk4Mzk3ODQ5NX0.h8yuK8rNSmnSrQsVHOdlHElAKln05qfCXOYuc7njct8',
)

export const extensionSupabaseLogin = async () => {
  const redirectUri = chrome.identity.getRedirectURL('supabase-auth')
  console.log('redirectUri', redirectUri) // add this to your supabase auth redirect URLs list
  const options = {
    provider: 'google',
    redirect_to: redirectUri,
  }
  const url = `https://gcfdbauttuvhaygubowf.supabase.co/auth/v1/authorize?${qs.stringify(options)}`
  console.log('supabase auth url in extensionSupabaseLogin -->', url)

  const authorizeResult = await new Promise((resolve, reject) => {
    chrome.identity.launchWebAuthFlow(
      {
        url,
        interactive: true,
      },
      (callbackUrl) => {
        resolve(callbackUrl)
      },
    )
  })
  if (!authorizeResult) {
    return { error: 'No authorizeResult' }
  }
  const authResult = qs.parse(authorizeResult?.split('#')[1])
  const refreshToken = authResult?.refresh_token
  // as documented here: https://supabase.com/docs/reference/javascript/auth-signin#sign-in-using-a-refresh-token-eg-in-react-native
  const { user, session, error } = await supabase.auth.signIn({
    refreshToken,
  })
  console.log('user', user, 'session', session, 'error', error)
  if (error) {
    return { error }
  }
  chrome.storage.sync.set({ 'widgetise-auth': JSON.stringify({ user, session }) }, function () {
    console.log('you saved me!!')
  })
}

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  // if (sender.url?.startsWith('http://localhost')) return
  setTimeout(() => {
    chrome.tabs.query({ active: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['js/content.js'],
        })
      }
    })
  }, 3000)
})
