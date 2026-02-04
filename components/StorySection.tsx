import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const StorySection: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-black italic text-[#1a2e2a] pt-12">
        The Mental Lapse That Made Me Break Down
      </h3>

      <div className="relative rounded-xl overflow-hidden mb-12 border-4 border-white">
        <img
          src={`${BASE_PATH}/images/mental-fog-senior.jpg`}
          alt="Senior forgetting something"
          className="w-full object-cover aspect-video grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#1a2e2a]/30"></div>
      </div>

      <div className="space-y-6 text-gray-700">
        <p>
          Honestly? My own brain fog was getting harder and harder to hide.
        </p>
        <p>It started quietly, with small slips that I kept ignoring:</p>
        <ul className="space-y-2 font-medium text-gray-600 pl-4 border-l-2 border-[#DFB277]/20">
          <li>• Losing my train of thought mid-sentence.</li>
          <li>
            • Walking into a room and completely forgetting what I went there
            for.
          </li>
          <li>
            • Avoiding organizing the closet because my brain felt "too full".
          </li>
        </ul>
        <p>Annoying, sure. But manageable.</p>
        <p>Until the day my brain truly betrayed me.</p>
        <p>
          I was on a video call with a long-time client — someone who trusts me
          with her health. And I called her by the wrong name.
        </p>
        <p>Twice.</p>
        <p>
          I laughed it off and apologized. Blamed it on "end-of-day fatigue".
        </p>
        <p>Then I recommended a meal plan that included gluten.</p>
        <p>She has a gluten intolerance. I've known this since day one.</p>
        <p>I saw her expression change from warm → confused → hurt.</p>
        <p>And I felt something I hadn’t felt in a long time.</p>
        <p>Shame. The kind that burns your face.</p>
        <p>
          When the call ended, I closed my laptop, went to the kitchen, and
          leaned my forehead against the counter. And I cried.
        </p>
        <p>
          Because deep down, I knew this wasn't just stress. Something in my
          brain wasn't working like it used to.
        </p>
        <p>
          And for the first time, I had to ask myself the same hard question I
          ask my clients:
        </p>
        <p className="font-bold text-[#2d5a4c] italic">
          "Is this just burnout… or is there something deeper happening?"
        </p>
      </div>
    </>
  );
};
