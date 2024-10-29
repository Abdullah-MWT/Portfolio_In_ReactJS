document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
  
    editor.addEventListener('input', function () {
      const markdownText = editor.value;
      const htmlText = marked(markdownText);
      preview.innerHTML = htmlText;
    });
  
    // Default markdown text
    editor.value = '# Hello, world!\n\n**This** is a Markdown previewer.';
    // Trigger input event to render the default text
    editor.dispatchEvent(new Event('input'));
  });