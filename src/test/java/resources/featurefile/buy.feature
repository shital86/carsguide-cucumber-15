Feature: Search functionality

  Scenario Outline: : : Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make  | model    | location | price   |
      | Jeep  | Cherokee | ACT-All  | $20,000 |
      | BMW   | 116i     | NSW-All  | $30,000 |
      | Ford  | Capri    | ACT-All  | $20,000 |
      | Honda | Acty     | ACT-All  | $40,000 |
      | Audi  | A1       | ACT-All  | $30,000 |
      | Audi  | A3       | ACT-All  | $50,000 |

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click 'Used' link
    Then I navigate to 'Used Cars For Sale' page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make  | model    | location | price   |
      | Jeep  | Cherokee | ACT-All  | $20,000 |
      | BMW   | 116i     | NSW-All  | $30,000 |
      | Ford  | Capri    | ACT-All  | $20,000 |
      | Honda | Acty     | ACT-All  | $40,000 |
      | Audi  | A1       | ACT-All  | $30,000 |
      | Audi  | A3       | ACT-All  | $50,000 |

