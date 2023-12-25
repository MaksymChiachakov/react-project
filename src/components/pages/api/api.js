import axios from 'axios';

// Base URL:
axios.defaults.baseURL = 'http://localhost:3030/'

// GET
export const getContactsList = async () => {
    const contacts = await axios.get('contacts')
    return contacts.data
}

// ADD
export const addContact = async (payload) => {
    const contacts = await axios.post('contacts', payload)
    return contacts.data
}

// DELETE 
export const deleteContact = async (id) => {
    await axios.delete(`contacts/${id}`)
}

// GET (singleContact)
export const getSingleContact = async (id) => {
    const contact = await axios.get(`contacts/${id}`)
    return contact.data
}

// ADD
export const addUser = async (payload) => {
    const contacts = await axios.post('auth', payload)
    return contacts.data
}

// GET ALL
export const getAllUsers = async () => {
    const contacts = await axios.get('auth')
    return contacts.data
}

// REDUX TOOLKIT
