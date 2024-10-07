const addNote = async (req) => {
    const reqs = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.user}`,
        },
        body: JSON.stringify({title: req.title, text: req.text})
    })
    const res = await reqs.json();
    return res;
}

const getNotes = async (user) => {
    const req = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`, {
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json',
        }
    })
    const res = await req.json();
    return res;
}

const notesService = {addNote, getNotes}

export default notesService;