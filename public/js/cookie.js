function setActionsToButtons()
{
    var acceptAllButton = document.getElementsByName("acceptAll");
    for (var i = 0; i < acceptAllButton.length; i++) {
        acceptAllButton[i].onclick = acceptAllCategories;
    }

    var saveSelectionButton = document.getElementsByName("saveSelection");
    for (var i = 0; i < saveSelectionButton.length; i++) {
        saveSelectionButton[i].onclick = saveSelection;
    }

    var adjustSettingsButton = document.getElementsByName("adjustSettings");
    for (var i = 0; i < adjustSettingsButton.length; i++) {
        adjustSettingsButton[i].onclick = adjustSettings;
    }

    var denyAllButton = document.getElementsByName("denyAll");
    for(var i = 0; i < denyAllButton.length; i++) {
        denyAllButton[i].onclick = denyAllCategories;
    }
    var openCF = document.getElementById("openCF");
    openCF.onclick = openCookieFirstPanel;        


    var acceptAll = document.getElementById("acceptAll");
    acceptAll.onclick = acceptAllCategories;

    var denyAll = document.getElementById("denyAll");
    denyAll.onclick = denyAllCategories;

    var adjustSetting = document.getElementById("adjustSettings");
    adjustSetting.onclick = saveSelection;
}

function hideByDefault() {
    // Hide consentNotGiven if consent is already given
    if(CookieFirst.consent){
        var elements = document.querySelectorAll('#cookiefirst-custom-banner [data-hide-element=consentNotGiven]');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        return;
    }

    // Hide consent given if consent is not yet given
    var elements = document.querySelectorAll('#cookiefirst-custom-banner [data-hide-element=consentGiven]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    
}

function setInitalConsent()
{
    var checkboxesNecessary = document.querySelectorAll('#cookiefirst-custom-banner input[name=necessary]');
    for (var i = 0; i < checkboxesNecessary.length; i++ ) {
        if(checkboxesNecessary[i].type == "checkbox")
        {
            checkboxesNecessary[i].checked = "true";
        }
    }
    if(!CookieFirst.consent)
        return;

    var consents = ["performance", "functional", "advertising"]
    consents.forEach((consent, i) =>
    {
        if(CookieFirst.consent[consent])
        {
            var checkboxes = document.querySelectorAll('#cookiefirst-custom-banner input[name='+consent+']');
            for (var i = 0; i < checkboxes.length; i++ ) {
                if(checkboxes[i].type == "checkbox")
                {
                    checkboxes[i].checked = "true";
                }
            }
        }
    });
}

function acceptAllCategories() {
    CookieFirst.acceptAllCategories();
    closeCookieFirstPanel();
}

function saveSelection() {
    var checkboxes = document.querySelectorAll('#cookiefirst-custom-banner input[type=checkbox]');
    var new_consent = {};
    for (var i = 0; i<checkboxes.length; i++) {
        new_consent[ checkboxes[i].name ] = checkboxes[i].checked;
    }
    new_consent['necessary'] = true;

    CookieFirst.updateConsent(new_consent);
    closeCookieFirstPanel();
}

function adjustSettings() {
    //Show the consent given attributes
    var elements = document.querySelectorAll('#cookiefirst-custom-banner [data-hide-element=consentGiven]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
    // Hide the consent not given attributes
    var elements2 = document.querySelectorAll('#cookiefirst-custom-banner [data-hide-element=consentNotGiven]');
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.display = 'None';
    }
}

function denyAllCategories() {
    CookieFirst.declineAllCategories();
    closeCookieFirstPanel();
}

function openCookieFirstPanel() {
    var container = document.getElementById('cookiefirst-custom-banner');
    if (!container)
        throw new Error('CF:: Could not locate the banner element in the DOM.');

    setInitalConsent();

    container.style.display = '';

    // adjust scroll to top
    document.documentElement.scrollTop = 0;
    document.body && (document.body.scrollTop = 0);

    // // disable scroll to enable sticky popup
    document.documentElement.classList.add('cookiefirst-custom-no-overflow');
    window.addEventListener("cf_consent", handleConsentEvent);
}

function closeCookieFirstPanel() {
    document.documentElement.classList.remove('cookiefirst-custom-no-overflow');
    var container = document.getElementById('cookiefirst-custom-banner');

    if ( !container || !container.offsetParent)
        return

    container.style.display = 'none';
}

function handleConsentEvent() {
    closeCookieFirstPanel();
    window.removeEventListener("cf_consent", handleConsentEvent);
}

function initializeCookieFirstPanel() {
    // Run functions to build page
    setActionsToButtons();
    // Hide elements that are set to hide by default
    hideByDefault();
    // initial consent notice
    CookieFirst.consent || openCookieFirstPanel();
}

window.addEventListener("cf_init", initializeCookieFirstPanel);

