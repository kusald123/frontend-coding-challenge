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

module.exports = {
    STATUS, URL, TYPES, FILTERS
}