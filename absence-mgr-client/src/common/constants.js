const STATUS = {
    REQUESTED: 'Requested',
    CONFIRMED: 'Confirmed',
    REJECTED: 'Rejected'
}

const TYPES = {
    VACATION: 'vacation',
    SICKNESS: 'sickness'
}

const URL = {
    MEMBERS: 'http://localhost:3030/members',
    ABSENCES: 'http://localhost:3030/absences'
}

const FILTERS = {
    TYPE: 'type',
    DATE: 'date'
}

const MESSAGES = {
    EMPTY: 'The list is empty',
    ERROR: 'There were some issues when loading the page'
}

module.exports = {
    STATUS, URL, TYPES, FILTERS, MESSAGES
}