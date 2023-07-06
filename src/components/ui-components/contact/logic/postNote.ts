import { Note } from '../types/note'

const postNote = async (note: Note) => {
  try {
    const testURL = 'https://webhook.site/baa23c96-13d4-477d-a2e3-4842fb75564a'
    const response = await fetch(testURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })

    if (response.ok) {
      // POST request succeeded
      console.log('Note Sent Successfully')
    } else {
      // handle error response
      console.error('Error Sending Note')
    }
  } catch (error) {
    // handle network or other errors
    console.error('Error:', error)
  }
}

export default postNote
