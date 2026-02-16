'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface Field {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  required?: boolean;
  options?: { value: string; label: string }[];
}

interface ContentFormProps {
  title: string;
  fields: Field[];
  initialData?: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
  onCancel: () => void;
  submitLabel?: string;
}

const inputStyle = {
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-text)',
};

export function ContentForm({
  title,
  fields,
  initialData = {},
  onSubmit,
  onCancel,
  submitLabel = 'Enregistrer',
}: ContentFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}>
      <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text)' }}>{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === 'textarea' ? (
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {field.label}
                  {field.required && <span className="ml-1" style={{ color: 'var(--color-error)' }}>*</span>}
                </label>
                <textarea
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.required}
                  rows={4}
                  className="block w-full rounded-lg px-4 py-2.5 themed-focus"
                  style={inputStyle}
                />
              </div>
            ) : field.type === 'select' ? (
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {field.label}
                  {field.required && <span className="ml-1" style={{ color: 'var(--color-error)' }}>*</span>}
                </label>
                <select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.required}
                  className="block w-full rounded-lg px-4 py-2.5 min-h-[44px] themed-focus"
                  style={inputStyle}
                >
                  <option value="">Sélectionner...</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <Input
                label={field.label}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                required={field.required}
              />
            )}
          </div>
        ))}

        {error && (
          <div className="rounded-lg p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--color-error) 15%, transparent)', border: '1px solid var(--color-error)' }}>
            <p className="text-sm" style={{ color: 'var(--color-error)' }}>{error}</p>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Annuler
          </Button>
          <Button type="submit" isLoading={isSubmitting}>
            {submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}
