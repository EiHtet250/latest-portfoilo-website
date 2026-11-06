import Icon from './Icon.jsx';

// Demo + code buttons. A missing link shows a disabled "coming soon" button,
// so every card keeps the same layout.
export default function ProjectLinks({ project }) {
  return (
    <>
      {project.demo && (
        <a className="btn btn-outline btn-sm" href={project.demo} target="_blank" rel="noreferrer">
          Live demo <Icon name="external" size={15} />
        </a>
      )}
      {project.code ? (
        <a className="btn btn-outline btn-sm" href={project.code} target="_blank" rel="noreferrer">
          <Icon name="github" size={16} /> Code
        </a>
      ) : (
        <span className="btn btn-disabled btn-sm" title="GitHub link not added yet">
          <Icon name="github" size={16} /> Code coming soon
        </span>
      )}
    </>
  );
}
