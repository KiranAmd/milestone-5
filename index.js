// Function to generate the resume
function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Professional Summary:</strong><br> ${summary}</p>
        <p><strong>Work Experience:</strong><br> ${experience}</p>
        <p><strong>Education:</strong><br> ${education}</p>
        <p><strong>Skills:</strong><br> ${skills}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeDisplay').style.display = 'block';
}

// Function to generate shareable link (same as above)
function generateShareableLink() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const queryString = encodeURIComponent(
        `name=${name}&email=${email}&phone=${phone}&address=${address}&summary=${summary}&experience=${experience}&education=${education}&skills=${skills}`
    );

    const shareableLink = `${window.location.origin}${window.location.pathname}?${queryString}`;
    document.getElementById('shareLink').value = shareableLink;
}

// Function to copy link to clipboard
function copyLink() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
}

// Function to generate PDF
function generatePDF() {
    // Create a new instance of jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the resume content
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    // Add text to PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.text(`Professional Summary:`, 10, 50);
    doc.text(summary, 10, 60);
    doc.text(`Work Experience:`, 10, 80);
    doc.text(experience, 10, 90);
    doc.text(`Education:`, 10, 110);
    doc.text(education, 10, 120);
    doc.text(`Skills:`, 10, 140);
    doc.text(skills, 10, 150);

    // Save the generated PDF
    doc.save("resume.pdf");
}

