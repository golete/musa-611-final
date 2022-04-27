const slides01 = [
  {
    title: "La Finquita",
    content: `
      Our story begins in a small corner of northeast Philadelphia called
      La Finquita.
      `,
    phase: 'finquita',
    showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "",
    content: `
      La Finquita —Spanish for "the little farm"—was a thriving community garden
      located on a vacant lot in the Kensington neighborhood of Philadelphia.
      For decades, La Finquita provided a source of much-needed fresh produce to
      residents and community members.
      <br></br>
      <img src='img/slide09_finquita.jpg' alt='Community Garden'>
    `,
    phase: 'finquitaZoom',
    showpopups: true,
    //bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "",
    content: `
      ...that is, until the spring of 2019 when La Finquita permanently closed.
      <br></br>
      <img src='img/slide02_finquita.png' alt='Empty Lot'>
      <br></br>
      If you walk past La Finquita today, you would never know that this empty
      plot was but a few short years ago a bustling urban garden beloved by
      community members from all across the neighborhood.
    `,
    phase: 'finquitaZoom',
    //showpopups: true,
    //bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "Vacant Lots in Philadelphia",
    content: `
      La Finquita is only one of over 27,000 vacant lots across Philadelphia,
      many of which serve a variety of cherished community uses, from urban
      gardens to public parks to small side yards.
      <br></br>
      In the last several years, however, community assets like La Finquita have
      faced a growing threat. The City of Philadelphia has been foreclosing on
      vacant properties in bulk, forcibly selling them via public auction.
      <br></br> 
      Often, neighbors who have tended to these properties for years do not find
      out that they are up for sale until they have already been bought.
      `,
    phase: 'vacant',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  }
];

const slides02 = [
  {
    title: "Vacant Lots in Philadelphia",
    content: `
      La Finquita is only one of over 27,000 vacant lots across Philadelphia,
      many of which serve a variety of cherished community uses, from urban
      gardens to public parks to small side yards.
      <br></br>
      In the last several years, however, community assets like La Finquita have
      faced a growing threat. The City of Philadelphia has been foreclosing on
      vacant properties in bulk, forcibly selling them via public auction.
      <br></br> 
      Often, neighbors who have tended to these properties for years do not find
      out that they are up for sale until they have already been bought.
      `,
    phase: 'vacant',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "Real Estate Tax Delinquencies",
    content: `
      Of all 27,000 vacant properties in Philadelphia, approximately 29% are
      tax delinquent. That means that nearly 8,000 vacant properties are at risk
      of tax foreclosure across Philadelphia.
      `,
    phase: 'delinquent',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "US Bank Liens",
    content: `
      To complicate matters further, nearly 2,000 vacant properties are
      encumbered by debt that is held by U.S. Bank. In the late 1990s, the City
      of Philadelphia faced a school funding crisis, so in a desperate bid to
      obtain financing, it bundled and securitized thousands of tax liens and
      sold them to U.S. Bank. As a private financial institution, U.S. Bank can
      independently initiate foreclosure proceedings, without notice or input
      from local community members.
      `,
    phase: 'usbank',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "Sheriff Sales",
    content: `
      The number of properties sold through a sheriff's sale has skyrocketed in
      recent years.
      <br></br>
      These sales increased exponentially over the decade following the 2008
      subprime mortgage crisis, rising with the tide of the broader real estate
      market. Despite a recent dip in sheriff's sales during the coronavirus
      pandemic, this trend is likely transient since the Philadelphia Sheriff's
      Office moved auctions online, greatly expanding the pool of potential
      buyers.
      `,
    phase: 'sheriff',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  }
];

const slides03 = [
  {
    title: "...into Majority Minority Neighborhoods",
    content: `
      However, when we put this into perspective, it is evident that this
      development is expanding towards neighborhoods whose residents are mostly
      part of a racial minority.
    `,
    phase: 'minority',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "...and into below-median Income Neighborhoods",
    content: `
      And also, below the median household income in Philadelphia. This presents
      the risk that these residents, most of whom have long lived in these
      neighborhoods, and who mostly do not own their homes, could be displaced
      by rising rents and predatory development practices.
    `,
    phase: 'income',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  },
  {
    title: "The development frontier: Kensington",
    content: `
      A neighborhood representative of this change is Kensington, in north
      Philadelphia. Here, new development has poured into the neighborhood from
      the east (coming from Fishtown) and the south (coming from the intensively
      densified Northern Liberties).
    `,
    phase: 'kensington',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]]
  },
  {
    title: "Vacant Lots in Kensington",
    content: `
      By looking at the available vacant lots remaining in Kensington, it is
      possible to devise how the south-east half of the neighborhood lots have
      been developed and most of the available ones remain at the north-west
      end.
    `,
    phase: 'vacantLand',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]]
  },
  {
    title: "Three Vacant Lots near Germantown Ave.",
    content: `
      For example, these three vacant plots, close to Germantown Ave., have been
      engulfed with new apartment buildings on the block they are located, and
      it is very possible they will soon be built on.
      <br></br>
      <img src='img/slide07_germantown.png' alt='Vacant Lot in Germantown'>
    `,
    phase: 'vacantLandZoom',
    showpopups: true,
  },
  {
    title: "Vacant Lots and Real Estate Delinquencies",
    content: `
      To understand how developers can swiftly obtain these vacant lots, we can
      observe that many of them are tax delinquent, due to unpaid Real Estate
      Taxes to the City of Philadelphia.
      <br></br>
      Much of these properties have accumulated debt over decades because their
      owners had no interest or opportunity to sell or built on them.
    `,
    phase: 'vacantLand',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]]
  },
  {
    title: "...and in Kensington",
    content: `
      Kensington is no exemption to these foreclosures.
    `,
    phase: 'usBankZoom',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]]
  },
  {
    title: "Cesar Iglesias Community Garden",
    content: `
      Many neighbors of these vacant lots have reasons to try to avoid them
      going into a developer’s hands. In particular, given how long these lots
      have remained empty, many of them lots have been taken care by the
      community around them.
      <br></br>
      <img src='img/slide09_finquita.jpg' alt='Community Garden'>
    `,
    phase: 'garden',
    showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]]
  },
  {
    title: "Cesar Iglesias Community Garden",
    content: `
      Across Philadelphia, many other thriving community gardens exist on
      delinquent vacant land owned by the US Bank or the City. Further north and
      behind the ‘development wave’ process, a group of neighbors is fighting to
      keep the Cesar Andreu Community Garden theirs. The garden was opened in
      2012 but has recently been partially bought by a private developer and is
      at risk of being closed.
      <br></br>
      <img src='img/slide10_cesar.png' alt='Community Garden'>
    `,
    phase: 'gardenZoom',
    showpopups: true
  },
  {
    title: "Thank you.",
    content: `
      `,
    phase: 'philadelphia',
    //showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
  }
];
