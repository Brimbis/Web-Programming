import '../styles/App.css';
import Logo from './Logo';

export default function ProfileCard({ title, path, description }) {
    const isImage = path && (/\.(jpeg|jpg|gif|png|webp)$/i).test(path);

    return (
        <>
            <h2 className="text-4xl font-bold mb-10 text-center text-indigo-100">{title}</h2>

            {isImage ? (
                <Logo
                    path={path}
                    styling="image-small"
                />
            ) : (
                <p className="text-xl text-center mb-8 text-indigo-300">{path}</p>
            )}

            <p
                className="text-lg leading-relaxed border-l-4 border-indigo-400 pl-6 text-blue-200 mb-20"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </>
    );
}
