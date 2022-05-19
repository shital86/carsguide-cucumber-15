package au.com.carguide.pages;

import au.com.carguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCArSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public NewAndUsedCArSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newAndUsedCarSearchText;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement anyMakes;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement anyModel;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement anyLocation;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceMax;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarButton;
    @CacheLookup
    @FindBy(css = ".listing-search-title")
    WebElement verifySearch;

    public String getNewAndUsedCarSearchText() {
        String message = getTextFromElement(newAndUsedCarSearchText);
        log.info("Verify New & Used Car Search - carsguide Text :" + newAndUsedCarSearchText.toString());
        return message;
    }

    public void selectMake(String make) {
        sendTextToElement(anyMakes, make);
        log.info("select make : " + make);
    }

    public void selctModel(String model) {
        sendTextToElement(anyModel, model);

        log.info("select model : " + model);
    }

    public void selctLocation(String location) {

        sendTextToElement(anyLocation, location);
        log.info("select model : " + location);
    }

    public void selctPriceMax(String price) {
        sendTextToElement(priceMax, price);
        log.info("select model : " + price);
    }

    public void clickOnFindMyNextCarButton() {
        clickOnElement(findMyNextCarButton);
        log.info("select model : " + findMyNextCarButton.toString());
    }
    public void verifyingTheSearch(String make){
        String expectedMessage=verifySearch.getText();
        Boolean actualMessage= expectedMessage.contains(make);
        Assert.assertTrue(actualMessage);
        log.info("verifying search results : " + verifySearch.toString());
    }
}