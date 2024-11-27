export const submitContactForm = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name, !email, !message) {
        return res.satus(400).json({ error: 'All fields are required.' })
    }

    res.status(201).json(`Message successfully`)
}