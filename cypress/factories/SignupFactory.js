var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(lastName),
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '500',
                details: 'Casa fundos',
                district: 'Itaim Bibi',
                city_uf: 'São Paulo/SP'
            },
            method_delivery: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}