import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Sidebar.css';

function Sidebar() {
  const [topics, setTopics] = useState([
    {
      name: 'LEARNINGS',
      isOpen: false,
      subtopics: [
        { id: 1, name: 'Introduction', path: '/intro' },
        { id: 2, name: 'JSX', path: '/page2' },
        { id: 3, name: 'React Components', path: '/page3'},
        { id: 4, name: 'Props', path: '/page31' },
        { id: 5, name: 'React Lifecycle Methods', path: '/page4' },
        { id: 6, name: 'React - Webpack and Babel', path: '/page5'},
        { id: 7, name: 'useState Hook', path: '/page6' },
        { id: 8, name: 'useEffect Hook', path: '/page7', },
        { id: 9, name: 'References', path: 'https://react.dev/reference/react', }
      ]
    },
    {
      name: 'PRACTICE APPLICATIONS',
      isOpen: false,
      subtopics: [
        { id: 1, name: 'Grocery List Application', path: 'https://grocery-list-app-gamma.vercel.app/' },
        { id: 2, name: 'Mobile Shopping Site', path: 'https://nm-licet-group17-licet.vercel.app/' },

      ]
    },

    {
      name: 'Enrolment Details',
      isOpen: false,
      subtopics: [
        { id: 1, name: 'Enrolment', path: '/enrol' },
        { id: 1, name: 'Payment', path: '/payment' },
      ]
    }
  ]);

  const toggleTopic = (index) => {
    const newTopics = [...topics];
    newTopics[index].isOpen = !newTopics[index].isOpen;
    setTopics(newTopics);
  };

  return (
    <article className="sidebar" style={{ padding: '10px', textAlign: 'left' }}>
      {topics.map((topic, index) => (
        <div key={index} className="topic" style={{ marginBottom: '10px' }}>
          <h4 className="s21" onClick={() => toggleTopic(index)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <span>{topic.name}</span>
            <FontAwesomeIcon icon={topic.isOpen ? faAngleDown : faAngleRight} />
          </h4>
          {topic.isOpen && (
            <ul className="s1 subtopics" style={{ paddingLeft: '20px', marginTop: '5px' }}>
              {topic.subtopics.map(subtopic => (
                <li key={subtopic.id} className="subtopic" style={{ marginBottom: '5px' }}>
                  <Link to={subtopic.path} style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '5px' }} />
                    {subtopic.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </article>
  );
}

export default Sidebar;
