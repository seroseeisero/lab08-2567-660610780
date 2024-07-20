export default function Footer(prop) {
    return (
      <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {prop.year} {prop.name} {prop.studentID}
        </p>
      </div>
    );
  }