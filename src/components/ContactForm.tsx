import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  onSubmit: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmitForm = async (data: FormData) => {
    try {
      const response = await fetch('/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      onSubmit();
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-white rounded-xl p-6 md:p-8 shadow-service"
    >
      <h3 className="text-2xl font-semibold mb-6">Être rappelé(e) par notre équipe</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="input-label">
            Prénom <span className="text-error-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            className={`input-field ${errors.firstName ? 'border-error-500' : ''}`}
            placeholder="Votre prénom"
            {...register('firstName', { 
              required: 'Ce champ est obligatoire',
            })}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="lastName" className="input-label">
            Nom <span className="text-error-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            className={`input-field ${errors.lastName ? 'border-error-500' : ''}`}
            placeholder="Votre nom"
            {...register('lastName', { 
              required: 'Ce champ est obligatoire',
            })}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="address" className="input-label">
          Adresse complète <span className="text-error-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          className={`input-field ${errors.address ? 'border-error-500' : ''}`}
          placeholder="Votre adresse"
          {...register('address', { 
            required: 'Ce champ est obligatoire',
          })}
        />
        {errors.address && (
          <p className="error-message">{errors.address.message}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="input-label">
          Téléphone <span className="text-error-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className={`input-field ${errors.phone ? 'border-error-500' : ''}`}
          placeholder="Votre numéro de téléphone"
          {...register('phone', { 
            required: 'Ce champ est obligatoire',
            pattern: {
              value: /^(\+33|0)[1-9](\d{2}){4}$/,
              message: 'Numéro de téléphone invalide'
            }
          })}
        />
        {errors.phone && (
          <p className="error-message">{errors.phone.message}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="input-label">
          Description du besoin <span className="text-error-500">*</span>
        </label>
        <textarea
          id="message"
          className={`input-field min-h-32 ${errors.message ? 'border-error-500' : ''}`}
          placeholder="Décrivez votre besoin (type de prestation, date souhaitée...)"
          rows={5}
          {...register('message', { 
            required: 'Ce champ est obligatoire',
            minLength: {
              value: 10,
              message: 'Votre message doit contenir au moins 10 caractères'
            }
          })}
        ></textarea>
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
    </form>
  );
};

export default ContactForm;