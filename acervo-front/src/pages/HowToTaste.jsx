import { Link } from 'react-router-dom';

function HowToTaste() {
  return (
    <div>
      <h1>Tasting</h1>
      <h3>Difference between an arabica and robusta coffee</h3>
      <p>
        Arabica and Robusta are the dominant players in the world of coffee,
        comprising nearly 95% of global production. Arabica thrives in
        high-altitude environments with careful temperature control and shade,
        resulting in fuller flavors, acidity, and lower caffeine content. On the
        other hand, Robusta, grown at lower elevations, boasts resilience to
        diseases, high yields, and a bold, bitter flavor with higher caffeine
        concentrations. Arabica is cultivation demands greater care and
        expertise, making it pricier, while Robusta offers a robust alternative,
        often used in blends and instant coffees for its strong character.
      </p>

      <p>
        In summary, Arabica appeals to those seeking a sweeter, smoother taste,
        while Robusta caters to those craving a bold, bitter kick. The choice
        between the two hinges on personal preference and desired flavor
        profile, with Arabica embodying complexity and aroma, and Robusta
        delivering strength and intensity.
      </p>

      <h3>Flavor Wheel</h3>
      <p>
        The Coffee Tasters Flavor Wheel, a collaboration between the Specialty
        Coffee Association of America and World Coffee Research, serves as a
        comprehensive tool for coffee enthusiasts and professionals alike. It
        facilitates mindful tasting, guiding users through a journey of aroma
        and flavor exploration. The wheel is design encourages starting with
        general descriptors near the center and gradually refining them to
        specific attributes, aiding in the detailed analysis and description of
        coffee profiles. Whether used casually or in professional cupping
        sessions, the wheel enhances the tasting experience, allowing
        individuals to unlock the nuances and complexities of different coffee
        varieties.
      </p>
      <p>
        If you want to learn more about the flavor wheel we kinldy recommend to
        you to take a look at this article by the Specialty Coffee Association
        of America
      </p>
      <Link
        to={`https://sca.coffee/sca-news/how-to-use-the-flavor-wheel-in-eight-steps#:~:text='Flavor' is defined as a,that only can be smelled`}
      >
        Article
      </Link>

      <h3>Coffee Cupping</h3>
      <p>
        Coffee cupping, alternatively referred to as coffee tasting, stands as a
        universally recognized procedure for assessing the attributes of coffee.
        This ritual is revered across the coffee supply chain, embraced by
        producers, importers/exporters, roasters, and baristas alike. Beyond its
        evaluative purpose, cupping serves as a crucial quality control measure,
        guaranteeing that each coffee roast achieves its utmost flavor
        potential.
      </p>
      <p>At this article you can learn more on how to do a coffee cupping.</p>
      <Link
        to={`https://methodicalcoffee.com/blogs/coffee-culture/coffee-cupping-a-step-by-step-guide`}
      >
        Article
      </Link>

      <h3>How to feel the coffee taste track form</h3>
      <h4>Coffee Info Fields</h4>
      <p>
        To ensure a comprehensive tasting experience, it is essential to
        complete the coffee info key fields in the form provided. These fields
        directly influence the flavor profile of the coffee and are often found
        on the coffee label or the seller website. If you are unsure about any
        field, a quick online search can provide clarity.
      </p>
      <h4>Coffee Recipe</h4>
      <p>
        Once you have filled in the necessary details, it is time to prepare
        your coffee using your preferred method. If you are new to this, seek
        out basic recipes tailored to your brewing method. With your tools
        ready, embark on your tasting journey.
      </p>
      <h4>Coffee Tasty</h4>
      <p>
        Referencing the taste wheel available online can aid in identifying
        flavor nuances. Recall the insights gained about the coffee tasting
        process, relax, and begin jotting down your observations. This
        step-by-step approach ensures a thorough and enjoyable tasting
        experience.
      </p>
      <h4>General Info</h4>
      <p>
        Once you have concluded your flavorful journey, we invite you to share
        some key details about the coffee you have tasted. This includes
        referencing the store where you purchased it, uploading a photo of the
        coffee to aid fellow enthusiasts in locating it, and deciding whether to
        share your experience with our community or retain it privately to
        further refine your recipe. Your input not only enriches our collective
        coffee knowledge but also enhances the experience for all coffee lovers.
      </p>
    </div>
  );
}

export default HowToTaste;
