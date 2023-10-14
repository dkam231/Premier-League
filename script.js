document.addEventListener("DOMContentLoaded", function () {
    // This code will run when the HTML page has fully loaded.

    const storyContainer = document.getElementById("story");

    

    const premierLeagueTeams = {
        Arsenal: {
        titles: 13,
        inPremierLeague: "1992–",
        topScorer: "Thierry Henry",
        },
        AstonVilla: {
        titles: 7,
        inPremierLeague: "1992–2016, 2019–",
        topScorer: "Gabriel Agbonlahor",
        },
        Brentford: {
        titles: 0,
        inPremierLeague: "2021–",
        topScorer: "Neal Maupay",
        },
        BrightonAndHoveAlbion: {
        titles: 0,
        inPremierLeague: "2017–",
        topScorer: "Glenn Murray",
        },
        Burnley: {
        titles: 2,
        inPremierLeague: "2009–2010, 2014–",
        topScorer: "George Beel",
        },
        Chelsea: {
        titles: 6,
        inPremierLeague: "1992–",
        topScorer: "Frank Lampard",
        },
        CrystalPalace: {
        titles: 0,
        inPremierLeague: "1992–1993, 1994–1998, 1999–2005, 2013–",
        topScorer: "Peter Simpson",
        },
        Everton: {
        titles: 9,
        inPremierLeague: "1992–",
        topScorer: "Dixie Dean",
        },
        LeedsUnited: {
        titles: 3,
        inPremierLeague: "1992–2004, 2020–",
        topScorer: "Peter Lorimer",
        },
        LeicesterCity: {
        titles: 1,
        inPremierLeague: "1994–1995, 1996–2004, 2014–",
        topScorer: "Arthur Chandler",
        },
        Liverpool: {
        titles: 19,
        inPremierLeague: "1992–",
        topScorer: "Ian Rush",
        },
        ManchesterCity: {
        titles: 6,
        inPremierLeague: "1992–1996, 1997–2001, 2002–2009, 2010–",
        topScorer: "Sergio Agüero",
        },
        ManchesterUnited: {
        titles: 20,
        inPremierLeague: "1992–",
        topScorer: "Wayne Rooney",
        },
        NewcastleUnited: {
        titles: 4,
        inPremierLeague: "1993–2009, 2010–2016, 2017–",
        topScorer: "Alan Shearer",
        },
        NorwichCity: {
        titles: 0,
        inPremierLeague: "1992–1995, 2004–2005, 2011–2014, 2015–2016, 2019–",
        topScorer: "Johnny Gavin",
        },
        Southampton: {
        titles: 0,
        inPremierLeague: "1992–2005, 2012–",
        topScorer: "Mick Channon",
        },
        TottenhamHotspur: {
        titles: 2,
        inPremierLeague: "1992–",
        topScorer: "Harry Kane",
        },
        Watford: {
        titles: 0,
        inPremierLeague: "1999–2000, 2006–2007, 2015–2016, 2021–",
        topScorer: "Luther Blissett",
        },
        WestHamUnited: {
        titles: 0,
        inPremierLeague: "1993–2003, 2005–2011, 2012–",
        topScorer: "Vic Watson",
        },
        WolverhamptonWanderers: {
        titles: 0,
        inPremierLeague: "2003–2004, 2009–2012, 2018–",
        topScorer: "Raúl Jiménez",
        },
        BirminghamCity: {
        titles: 0,
        inPremierLeague: "2002–2006, 2007–2008, 2009–2011, 2011–2018",
        topScorer: "Trevor Francis",
        },
        BlackburnRovers: {
        titles: 3,
        inPremierLeague: "1992–1999, 2000–2012",
        topScorer: "Simon Garner",
        },
        BoltonWanderers: {
        titles: 0,
        inPremierLeague: "1995–1996, 1997–1998, 2001–2012, 2017–2012",
        topScorer: "Nat Lofthouse",
        },
        CharltonAthletic: {
        titles: 0,
        inPremierLeague: "1998–2007, 2019–2010",
        topScorer: "Derek Hales",
        },
        CoventryCity: {
        titles: 0,
        inPremierLeague: "1992–2001, 2021–",
        topScorer: "Clarrie Bourton",
        },
        DerbyCounty: {
        titles: 2,
        inPremierLeague: "1996–2002",
        topScorer: "Steve Bloomer",
        },
        Fulham: {
        titles: 0,
        inPremierLeague: "2001–2003, 2004–2014, 2018–2019, 2020–2021",
        topScorer: "Gordon Davies",
        },
        HuddersfieldTown: {
        titles: 3,
        inPremierLeague: "1992–1996, 2017–2019",
        topScorer: "George Brown",
        },
        IpswichTown: {
        titles: 1,
        inPremierLeague: "1992–2002, 2022–",
        topScorer: "Ray Crawford",
        },
        LeicesterFosse: {
        titles: 0,
        inPremierLeague: "1908–1909",
        topScorer: "Arthur Chandler",
        },
        Middlesbrough: {
        titles: 0,
        inPremierLeague: "1992–1993, 1995–1997, 1998–2009, 2016–2017",
        topScorer: "George Camsell",
        },
        NottinghamForest: {
        titles: 1,
        inPremierLeague: "1992–1993, 1994–1997",
        topScorer: "Garry Birtles",
        },
        Portsmouth: {
        titles: 0,
        inPremierLeague: "2003–2010",
        topScorer: "Peter Harris",
        },
        QueensParkRangers: {
        titles: 0,
        inPremierLeague: "1992–1996, 2011–2015",
        topScorer: "George Goddard",
        },
        Reading: {
        titles: 0,
        inPremierLeague: "2006–2008, 2012–2013",
        topScorer: "Ronnie Blackman",
        },
        SheffieldUnited: {
        titles: 1,
        inPremierLeague: "1992–1994, 2006–2007, 2019–2020",
        topScorer: "Harry Johnson",
        },
        SheffieldWednesday: {
        titles: 0,
        inPremierLeague: "1992–2000",
        topScorer: "Andrew Wilson",
        },
        StokeCity: {
        titles: 0,
        inPremierLeague: "2008–2013, 2015–2018",
        topScorer: "John Ritchie",
        },
        Sunderland: {
        titles: 6,
        inPremierLeague: "1996–1997, 1999–2003, 2005–2006, 2007–2017",
        topScorer: "Bobby Gurney",
        },
        SwanseaCity: {
        titles: 0,
        inPremierLeague: "2011–2013, 2014–2015, 2017–2018",
        topScorer: "Bob Latchford",
        },
        SwindonTown: {
        titles: 0,
        inPremierLeague: "1993–1994",
        topScorer: "Alan McLaughlin",
        },
        WestBromwichAlbion: {
        titles: 1,
        inPremierLeague: "1992–1993, 2002–2003, 2004–2006, 2008–2018, 2020–2021",
        topScorer: "Tony Brown",
        },
        WiganAthletic: {
        titles: 0,
        inPremierLeague: "2005–2013",
        topScorer: "Andy Liddell",
        },
        Wimbledon: {
        titles: 0,
        inPremierLeague: "1992–2000, 2000–2001",
        topScorer: "Robbie Earle",
        },
    };
        
    

    let storyState = "start";

    // Initialize the page with team choices
    updateStory();

    function updateStory() {
        const choicesContainer = document.getElementById("choices"); // Get the choices container

        switch (storyState) {
            case "start":
                storyContainer.textContent = "Welcome to the Premier League history visual novel. Choose a team to learn more about their championships and managers.";
                updateChoices(Object.keys(premierLeagueTeams));
                break;
            default:
                if (premierLeagueTeams[storyState]) {
                    const teamData = premierLeagueTeams[storyState];
                    storyContainer.innerHTML = `
                        ${storyState} has won ${teamData.titles} Premier League championships. 
                        In Premier League: ${teamData.inPremierLeague} and their top scorer: ${teamData.topScorer}.
                    `;
                }
                updateChoices(["Back to Start"]);
                break;
        }
    }

    function updateChoices(choices) {
        const choicesContainer = document.getElementById("choices"); // Get the choices container
        choicesContainer.innerHTML = "";
        choices.forEach((choice) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => handleChoice(choice));
            choicesContainer.appendChild(button);
        });
    }

    function handleChoice(choice) {
        if (choice === "Back to Start") {
            storyState = "start";
        } else {
            storyState = choice;
        }
        updateStory();
    }
});
