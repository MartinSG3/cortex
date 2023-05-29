enum CampaignType {
  /**
   * Product or brand will be displayed in advertisements on social media such as facebook or instagram
   */
  SOCIAL_MEDIA,
  /**
   * Product or brand will be displayed in advertisements inside search results such as on google or bing
   */
  SEARCH_ENGINE,
  /**
   * Advertisement will be run on television
   */
  TV,
}

interface Client {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of company that has hired us to do advertisement
   */
  name: string;
  /**
   * Our internal person that is assigned with the responsibility of communicating with this client
   */
  defaultCampaignManager: User;
}

interface User {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of person
   */
  name: string;
  /**
   * Job email address
   */
  email: string;
  /**
   * Password for login (not hashed)
   * (password hashing is not part of this case for the sake of simplicity, and is normally not handled by frontend code anyway)
   */
  password: string;
  /**
   * Images from  url
   */
  imageUrl: string;
}

interface Campaign {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of campaign
   * Normally contains the product name advertised and something relevant to the period it should run in
   */
  name: string;
  /**
   * Where people will encounter the advertisement
   */
  type: CampaignType;
  /**
   * The client that hired us to advertise
   */
  client: Client;
  /**
   * Our internal person that will set up the advertisement and communicate with the client
   * (may deviate from defaultCampaignManager)
   */
  campaignManager: User;
  /**
   * Start date of when advertisement will start to be displayed
   */
  startDate: string;
  /**
   * End date of when advertisement will start to be displayed
   */
  endDate: string;
  /**
   * The amount of currency that will be available to spend.
   * Given in norwegian kroner (NOK)
   */
  budget: number;
}
