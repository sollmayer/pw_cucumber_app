Feature: Conduit Login Functionality

Scenario: Login with valid credentials
    Given the user is on the Login page
    When the user enters valid credentials
    And the user clicks on login button
    Then the user is redirected to the Home page

Scenario: Login and Logout with valid credentials
    Given the user is on the Login page
    When the user enters valid credentials
    And the user clicks on the settings button
    And the user clicks on the logout button
    Then the user is redirected to the Login page