#language:en

  Feature: Example Playwright Test
    Scenario: Open Playwright website
    Given I open the Playwright homepage
    When The user type phone in search bar
    Then the title should contain "Playwright"
