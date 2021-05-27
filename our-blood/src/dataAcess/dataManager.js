import axios from 'axios'

export async function getDonors() {
    try {
      const response = await axios.get('https://ourblood-backend.azurewebsites.net/api/doador');
      console.log(response)
      const resposta = response.data
      return resposta
    } catch (error) {
      console.error(error);
    }
  }

  export async function getInstitutes() {
    try {
      const response = await axios.get('https://ourblood-backend.azurewebsites.net/api/institutos/SP');
      return (response.data)
    } catch (error) {
      console.error(error);
    }
  }


  export async function saveDonor () {
    axios.post('https://ourblood-backend.azurewebsites.net/api/doador', 
    {
        "nomeCompleto": "Gabriel",
        "dataNascimento": "11/12/2001",
        "cpf": "48775039869",
        "estado": "SP",
        "tipoSanguineo": "B+",
        "email": "gabs@konia.com.br",
        "senha": "123"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }