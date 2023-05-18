
const list = [
    {
      "name": "John Doe",
      "username": "@johndoe",
      "is_active": true
    },
    {
      "name": "Jane Smith",
      "username": "@janesmith",
      "is_active": false
    },
    {
      "name": "Mark Johnson",
      "username": "@markjohnson",
      "is_active": true
    },
    {
      "name": "Emily Davis",
      "username": "@emilydavis",
      "is_active": true
    },
    {
      "name": "Michael Lee",
      "username": "@michaellee",
      "is_active": false
    }
  ]

  
const getData = () => {
  const students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) :  list
  return students;
}

export default getData;
