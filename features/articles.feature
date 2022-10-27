Feature: Article Publish

    This feature tests the publishing of articles on conduit application

    Background:
        Given Saurabh is a writer

    Scenario: Publish a new article

        When Saurabh writes an article with following details
            | Learning Cucumber js  |
            | Regarding Cucumber JS |
            | This is a description |
            | automation            |
        Then article is published on the conduit

    @Sanity
    Scenario: Write a new article with map
        When Saurabh writes an article with following details as map
            | title       | Learning Cucumber js  |
            | details     | Regarding Cucumber JS |
            | description | This is a description |
            | tags        | automation            |
        Then article is published on the conduit

    Scenario: Publish multiple articles
        When Saurabh writes an article with following details multiple
            | title    | details  | description  | tags     |
            | Article1 | Cucumber | reg Cucumber | Cucumber |
        Then article is published on the conduit


    Scenario Outline: Publish multiple articles
        When Saurabh writes an article with following details multiple
            | title   | details   | description   | tags   |
            | <title> | <details> | <description> | <tags> |
        Then article is published on the conduit

        Examples:
            | title    | details   | description    | tags     |
            | Article1 | Cucumber  | reg Cucumber   | Cucumber |
            | Article2 | Cucumber2 | reg Cucumber 2 | Cucumber |
            | Article3 | Cucumber3 | reg Cucumber 3 | Cucumber |