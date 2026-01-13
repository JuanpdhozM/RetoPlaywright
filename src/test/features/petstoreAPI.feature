#language:en
  Feature: Gestión de una tienda de venta de mascotas API Test

  Background:
    Given Preparo el contexto de la api usando 'https://petstore.swagger.io/v2/'

    Scenario: Consultar una mascota
    When realizo una petición GET a 'pet/2'
    Then la respuesta retorna status code 200

    Scenario: Consultar una orden de compara
    And realizo una petición POST a 'store/order'
    When realizo una petición GET a 'store/order/9'
    Then la orden existe y retorna status code 200

    Scenario: Verificar el inventario de ventas
    When realizo una petición GET a 'store/inventory'
    Then verifica que la disponivilidad no este vacia

    Scenario: Eliminar una orden de compra
    When realizo una petición DELETE a 'store/order/9'
    Then verifico que el borrado retorna status code 200
