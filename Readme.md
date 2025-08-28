<h1>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h1>

<h2>Ans:</h2>
<p>getElementById, getElementsByClassName, querySelector, and querySelectorAll these are the javascript methods.These
    methos are used to seclect elements from DOM (Document Object Model)</p>.

<h3>Differences:</h3>
<ol>
<li><b>getElementById(id):</b> This method select a single element from DOM based on its unique id attribute.
</li>

<li>
    <b>getElementsByClassName(className):</b> It select all elements those have that specific class name.
</li>

<li>
    <b>querySelector(selector):</b> This method select the first element that matches the selector (use in css). It
        selects
        first mathing element based on some css selector for example: for id selector use '#id-name' , class selection
        use '.clss-name', tag selection use 'tag-name' (div, h1, span) , attribute selection and other combination of
        css selector etc.
</li>
<li>
        <b>querySelectorAll(selector):</b> This method select all elements that matches the selector (use in css). It
        also
        select elements based on id, class-name , tag-name, attribute and other combination of css selector etc.
</li>
</ol>
</br>
</br>
<h1>2. How do you create and insert a new element into the DOM?</h1>

<h2>Ans:</h2>

<p>At first i will select an element(parent) where i have to append (insert) the new element for example i have
    select 'body' element. After selecting the parent element create a new element such as div, p, span etc. Add
    content to the new element . Then insert this new created element to the parent element. Example is bellow:
    <p />

<ol>

<li> 
     <b>Select parent element :</b>
        const body = document.getQuerySelector('body')
</li>

<li> <b>Create new element:</b>
        const newElement = document.createElement('div')</li>


<li> <b>Add content to the new element:</b>
        newElement.innerHTML = 'content of new element'</li>

<li> <b>Insert the newCreated elemet to the parent:</b>
        body.appendChild(newElement)</li>

</ol>
</br>
</br>

<h1>3. What is Event Bubbling and how does it work?</h1>

<h2>Ans:</h2>
<p>Event bubbling is the event propagation process in javascript DOM. When an event happens in an element (such
    as click), the event doesn’t just stay there it also moves upward through its parent, then the parent’s
    parent, and keeps going until it reaches the very top of the page (the document).</br>

    Let a user make an action like click an element.The event first triggers any event handlers directly
    attached to the target element. After that if its parent has the same type of event listeners those also
    will be triggers. If the parent's parent has the same type of event listener that will also triggered, and
    keeps going this until it reaches the root element its called event bubbling.
</p>

</br>
</br>

<h1>4. What is Event Delegation in JavaScript? Why is it useful?</h1>

<h2>Ans:</h2>
<p>A parent element would have huge number of child element, adding event listener on child element is not a
    good use, it consume more memory and reduce performance. To solve these issues event delegation comes
    in.</br>
    An event delegation in javascript is a method where a single event listener is added on a parent element
    rather than multiple child element . When an event is happens on a child it bubbles up through the DOM until
    it reach parent. The parent event listener then identifies the targeted child execute the action.
</p>
</br>
</p>
It is usefull because it improves performance, consume less memory and easy to handle a single parent event
lisener instead of all child element also autometically haldles dynamic operation like adding apdating and
deleting element.
</p>

</br>
</br>

<h1>5. What is the difference between preventDefault() and stopPropagation() methods?</h1>

<p>
    The preventDefault() and stopPropagation() in javascript are different purposes in controlling event default
    behavior.
</p>

<h3>Differences:</h3>

<ol>

<li>
        <b>event.preventDefault():</b> this method stop default behavior of navigating to url specified in the
        href atttribute. for exapmple a form has a submit button containing a click event handler , if user
        click that button it will submit form data to server and reload the page by default. For stoping this
        default behavior inside the eventListener callback function event.preventDefault() will be added.
</li>
<li>
        <b>stopPropagation():</b> This method stop default event bubbling behavior. We know that if a child and
        parent element in DOM has same type of event listener , calling child event handler autometically call
        the parent its called event bubbling , to stop this bubbling behavior stopPropagation() is used.
</li>

</ol>