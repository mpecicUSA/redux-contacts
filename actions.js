//action creators 

export const ADD_CONTACT = "ADD_CONTACT"

export const addContact = (newContact) => {
    return {
        type = ADD_CONTACT,
        payload = newContact
    }
}

export const REMOVE_CONTACT = "REMOVE_CONTACT"

export const addContact = (id) => {
    return {
        type = REMOVE_CONTACT,
        payload = id
    }
}

