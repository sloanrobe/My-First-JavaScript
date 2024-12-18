const patients = [
    {
      name: 'Charlie',
      age: '42',
      allowedMedicine: ['type-a', 'type-b', 'type-c'],
    },
    {
      name: 'Veronica',
      age: '33',
      allowedMedicine: ['type-a', 'type-c'],
    },
    {
      name: 'Spencer',
      age: '57',
      allowedMedicine: ['type-e'],
    },
    {
      name: 'Wolfram',
      age: '74',
      allowedMedicine: ['type-d', 'type-a'],
    },
    {
      name: 'Jennifer',
      age: '22',
      allowedMedicine: ['type-a', 'type-c'],
    },
  ]
  
  function mostCommonMed() {

    const medicineCount = {}

    patients.forEach(patient => {
      patient.allowedMedicine.forEach(medicine => {
        if (medicineCount[medicine]) {
          medicineCount[medicine]++
        } else {
          medicineCount[medicine] = 1
        }
      })
    })
  }

mostCommonMed()