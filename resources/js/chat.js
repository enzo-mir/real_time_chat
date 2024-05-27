import { Transmit } from '@adonisjs/transmit-client'

const messageContainer = document.getElementById('messages')
const messageForm = document.getElementById('message_form')
const messageInput = document.getElementById('message')

messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = new FormData(e.currentTarget)
  void fetch(`/message/${window.location.pathname.replace('/chat/', '')}`, {
    method: 'POST',
    body: value,
  })
  messageInput.value = ''
})

const transmit = new Transmit({
  baseUrl: window.location.origin,
})

const subscription = transmit.subscription(window.location.pathname.replace('/', ''))

await subscription.create()

subscription.onMessage(({ message }) => {
  const element = document.createElement('p')
  element.innerHTML = message

  messageContainer.appendChild(element)
})
