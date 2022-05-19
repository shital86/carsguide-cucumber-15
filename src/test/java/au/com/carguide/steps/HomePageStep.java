package au.com.carguide.steps;

import au.com.carguide.pages.HomePage;
import au.com.carguide.pages.NewAndUsedCArSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }



    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyandSellTab();
    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnsearchCarOption();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        String expectedMessage = "New & Used Car Search - carsguide";
        String actualMessage = new NewAndUsedCArSearchPage().getNewAndUsedCarSearchText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new NewAndUsedCArSearchPage().selectMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new NewAndUsedCArSearchPage().selctModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new NewAndUsedCArSearchPage().selctLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new NewAndUsedCArSearchPage().selctPriceMax(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCArSearchPage().clickOnFindMyNextCarButton();
    }


    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        new NewAndUsedCArSearchPage().verifyingTheSearch(make);
    }


    @And("^I click 'Used' link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedsearchCarOption();
    }

    @Then("^I navigate to 'Used Cars For Sale' page$")
    public void iNavigateToUsedCarsForSalePage() {
    }
}
