import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FileUpload from '@/components/ui-p/FileUpload';

describe('FileUpload Component', () => {
  it('should render the file upload component', () => {
    render(<FileUpload />);
    
    const label = screen.getByText(/Sélectionnez un fichier ou faites-le glisser ici/i);
    expect(label).toBeInTheDocument();
  });

  it('should handle single file selection', async () => {
    const user = userEvent.setup()
    render(<FileUpload />)
    
    const file = new File(['test content'], 'test.png', { type: 'image/png' })
    
    const input = screen.getByLabelText(/choisir un fichier/i) as HTMLInputElement
    
    await user.upload(input, file)
    
    expect(input.files?.[0]).toBe(file)
    expect(input.files).toHaveLength(1)
  })

  it('should handle file drop', async () => {
    const onFilesChange = jest.fn();
    render(<FileUpload onFilesChange={onFilesChange} />);
    
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' });
    const label = screen.getByText(/Sélectionnez un fichier ou faites-le glisser ici/i).closest('label');
    
    fireEvent.drop(label!, {
      dataTransfer: { files: [file] }
    });
    
    await waitFor(() => {
      expect(onFilesChange).toHaveBeenCalledWith([file]);
    });
  });

  it('should apply drag active styles on drag enter', () => {
    render(<FileUpload />);
    
    const label = screen.getByText(/Sélectionnez un fichier ou faites-le glisser ici/i).closest('label');
    
    fireEvent.dragEnter(label!, {
      dataTransfer: { files: [] }
    });
    
    expect(label).toHaveClass('border-blue-500', 'bg-blue-50');
  });
});
