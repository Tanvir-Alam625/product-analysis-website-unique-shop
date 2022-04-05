import React from "react";

const Blogs = () => {
  return (
    <div className="m-2 md:m-4 lg:m-12 px-2">
      <h2 className="text-center text-6xl text-gray-500 font-extrabold my-4">
        Answer
      </h2>
      <hr />
      <span className="text-center text-3xl text-gray-500 font-semibold my-2">
        1. What is Context API?
      </span>
      <p className="text-gray-500 my-4">
        <span className="font-semibold">Answer:</span>A context api is a context
        api that sends data directly from one file to another file or component.
        . It is used so that data does not have to be passed in the form of
        props. Data can be accessed directly from any component.
        React.createContext() is all you need. It returns a consumer and a
        provider. Provider is a component that as it's names suggests provides
        the state to its children. It will hold the "store" and be the parent of
        all the components that might need that store. Consumer as it so happens
        is a component that consumes and uses the state. More information can be
        found on React's
      </p>
      <hr />
      <span className="text-center text-3xl text-gray-500 font-semibold my-2">
        1. What is a Semantic tags?
      </span>
      <p className="text-gray-500 my-4">
        <span className="font-semibold">Answer:</span>
        The tag that comes with the full meaning can be called semantic tag That
        is, an html tag that expresses a full meaning is called a semantic tag,
        such as a header, footer, table, from tags, etc. Semantic HTML elements
        are those that clearly describe their meaning in a human- and
        machine-readable way. Elements such as are all considered semantic
        because they accurately describe the purpose of the element and the type
        of content that is inside them.
      </p>
      <hr />
      <span className="text-center text-3xl text-gray-500 font-semibold my-2">
        3. Difference of inline vs inline block elements
      </span>
      <div className="inline-block-element flex w-full justify-center text-gray-500 mt-4">
        <div className="inline-block border-r-2 px-4">
          <h5 className="text-center text-xl capitalize ">Inline element</h5>
          <ol>
            <li>
              1. The element doesn’t start on a new line and only occupy just
              the width it requires. You can’t set the width or height
            </li>
            <li>
              2. The element doesn't start on a new line and only occupy just
              the width is requires. You can't set the width or height.
            </li>
          </ol>
        </div>
        <div className="inline-block-element px-4">
          <h5 className="text-center text-xl capitalize ">
            Inline block element
          </h5>
          <ul>
            <li>
              1. It’s formatted just like the inline element, where it doesn’t
              start on a new line. BUT, you can set width and height values.
            </li>
            <li>
              2. It's formatttd just like the inline element where it doesn't
              start on a new line. but, your can set width adn height values
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
