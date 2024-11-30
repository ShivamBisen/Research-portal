// components/ResearchDetails.tsx
import React from "react";

const data = {
  title: "AI-based Crop Disease Predictor",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sequi eum quaerat, exercitationem neque omnis dolores laborum saepe ad aut ut optio molestiae, fugit inventore pariatur temporibus sit quos sed magnam similique placeat quasi officia. Eveniet ea architecto fugiat consectetur a error doloribus atque ratione fuga numquam, provident qui officia deleniti et temporibus cum libero ex. Animi, aspernatur iusto quas cumque molestiae quidem modi fugit, rerum aperiam asperiores laboriosam blanditiis qui maiores minima dignissimos commodi at quasi, hic provident dolor culpa. Odio dolores labore libero quidem quas veritatis eos tempore reprehenderit, quos corporis vel magnam, a est veniam fugit assumenda doloribus nam nemo recusandae mollitia sed fuga ab. Expedita dolorum facere ex optio veritatis. Magnam, animi nesciunt. Autem, dolorum! Dolorem ex, ullam nesciunt eius rem perspiciatis mollitia a est eaque tenetur voluptatum molestiae corrupti deleniti vel totam cupiditate! Ratione saepe provident sapiente blanditiis eos amet iste? Quo quidem, laborum magni eaque tempora voluptas quas error fugiat eligendi assumenda nostrum delectus aut eius. Eveniet explicabo optio alias repellat a reiciendis qui culpa inventore magni perspiciatis perferendis esse, maxime molestias. Architecto doloremque facere cum in, reprehenderit modi veritatis tenetur, numquam aperiam saepe placeat atque ab exercitationem qui velit! Cupiditate totam nisi possimus enim officiis doloremque id voluptatum quaerat sed quibusdam sit voluptatibus soluta libero sapiente fugiat fuga aperiam perferendis harum ipsam tempore, consequatur expedita dolores placeat et? Nobis, beatae unde. Alias sequi quis, inventore quae accusantium incidunt praesentium error, eligendi quod velit saepe doloribus beatae ipsa, cum amet ipsum nam! Quia omnis vitae expedita exercitationem, cumque sequi incidunt ut voluptatum vel officiis architecto, consequuntur voluptatibus, doloribus soluta suscipit modi excepturi placeat provident magni dolorum perspiciatis. Excepturi sit numquam, natus corrupti labore eaque ab libero tempora voluptatum aperiam odio ipsa hic, voluptas quisquam obcaecati vitae velit reprehenderit voluptate? Porro in natus harum necessitatibus quis repellendus, officiis explicabo dicta quia quidem obcaecati nobis facilis! Consectetur sit incidunt nulla possimus earum quia adipisci cumque eveniet est excepturi architecto, fugit quo vero dignissimos quas tempora tempore! At excepturi, quos commodi, ipsa rerum aperiam, animi laboriosam inventore assumenda ut tempore! Cum beatae impedit doloribus omnis id voluptatibus iusto nam eos autem nobis, tempora alias dolor nostrum odit animi sit necessitatibus natus vero praesentium iure assumenda accusantium provident? Excepturi deleniti architecto et molestiae error eaque in nulla nisi adipisci totam vel, eos aut consectetur laboriosam placeat ducimus facere commodi sit quidem? Dolore laudantium cum maxime sed deleniti necessitatibus, quia aliquam dolorum, voluptas in optio ea dolor veniam et blanditiis aut cumque eaque numquam quod culpa possimus perspiciatis inventore. Cum magni doloribus rem nam animi dolor possimus alias eaque, corrupti impedit aperiam veniam similique tenetur inventore facilis? Iure quod sed quibusdam laborum animi, quasi impedit vero corrupti iste illo perferendis, minima accusantium asperiores! Animi, sed est! Atque accusantium numquam doloribus. Eveniet nemo ut culpa delectus aliquam sint nisi corporis! Magni totam laudantium sapiente dignissimos perspiciatis natus aliquam alias quis? Corrupti vero quaerat, impedit, sit rem minus consectetur dolorem repellat, atque molestias maxime assumenda nostrum perferendis optio! Suscipit, molestiae dignissimos!",
  guide: "Mr. Shreyash B",
  departments: ["Civil", "Architecture", "OENA"],
  skills: ["Python", "TensorFlow", "Data Analytics","Python", "TensorFlow", "Data Analytics"],
  duration: {
    start: { month: "January", year: "2024" },
    end: { month: "March", year: "2024" },
  },
  benefits: [
    "Hands-on AI experience",
    "Publication opportunity",
    "Networking with industry experts",
  ],
  contact: { name: "Mr. Shreyash B", email: "shreyash@example.com" },
  deadline: "December 15, 2023",
  applicationLink: "https://example.com/apply",
};


 const ResearchDetails = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{data.title}</h1>
      

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Guide</h2>
        <p>{data.guide}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Eligibility</h2>
        <p>
          <strong>Departments:</strong> {data.departments.join(", ")}
        </p>
        <p>
          <strong>Skills:</strong> {data.skills.join(", ")}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Duration</h2>
        <p>
          {data.duration.start.month.slice(0, 3)} {data.duration.start.year} -{" "}
          {data.duration.end.month.slice(0, 3)} {data.duration.end.year}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Benefits</h2>
        <ul className="list-disc list-inside">
          {data.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p>
          {data.contact.name} (<a href={`mailto:${data.contact.email}`} className="text-blue-600 underline">{data.contact.email}</a>)
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Application Deadline</h2>
        <p>{data.deadline}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-gray-700 mb-6">{data.description}</p>
      </div>

      <a
        href={data.applicationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700"
      >
        Apply Now
      </a>
    </div>
  );
};


export default ResearchDetails