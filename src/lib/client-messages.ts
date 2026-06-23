type Messages = Record<string, unknown>

export function pickClientMessages(messages: Messages) {
  const contact = messages.contact as Messages | undefined

  return {
    nav: messages.nav,
    language: messages.language,
    contact: {
      form: contact?.form,
    },
  }
}
