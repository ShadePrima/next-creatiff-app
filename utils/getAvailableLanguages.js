import axios from 'axios'

export const getAvailableLanguages = async () => {
  const token = '88e021c16c9e26ef55cdae66219a2f81a6665534'

  try {
    const res = await axios.get('http://16.16.208.23:8000/translations/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    console.log(res.data, 'res getAvail')
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}
