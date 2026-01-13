'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { submitRsvp } from '@/app/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  "Skills Data",
  "Manage Style Shift",
  "Leaders -> AI Portfolio",
  "Frontier Capability",
  "User-Centric Capabilities",
  "Winning Organizations"
];

const initialState = {
  message: '',
  error: false
}

export function RsvpForm() {
  // @ts-ignore
  const [state, formAction] = useFormState(submitRsvp, initialState);
  const [selected, setSelected] = useState<string[]>([]);
  const [pending, setPending] = useState(false);

  const toggle = (cap: string) => {
    setSelected(prev => prev.includes(cap) ? prev.filter(c => c !== cap) : [...prev, cap]);
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25)] mx-auto -mt-32 relative z-20 border-0" style={{ maxWidth: '651px' }}>

      <form action={(formData) => {
        setPending(true);
        formData.set('capabilities', selected.join(', '));
        formAction(formData);
        setTimeout(() => setPending(false), 1000);
      }} className="mb-10">
        <div className="flex flex-col sm:flex-row gap-4 p-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter your professional email"
            required
            className="flex-1 h-12 bg-white border-gray-300 focus:border-[#0050D8] focus:ring-1 focus:ring-[#0050D8] text-base"
          />
          <Button type="submit" variant="rsvp" disabled={pending} className="w-full sm:w-auto px-10 h-12 text-base font-bold tracking-wide uppercase shadow-lg shadow-orange-500/20">
            {pending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            RSVP NOW
          </Button>
        </div>

        {state.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center text-sm font-medium p-3 rounded ${state.error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}
          >
            {state.message}
          </motion.div>
        )}
      </form>

      <div className="text-left space-y-6">
        <p className="text-gray-600 leading-relaxed">
          As AI accelerates, organizations need specific strategies that shift from information assets to influencing workflows. The future capability stack focuses on human-AI protocols and intelligent agency.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#001D4A] leading-tight">
          Which capabilities will matter most,<br className="hidden md:block" />
          and how do we build them at scale?
        </h3>

        <p className="text-gray-600 leading-relaxed">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.
        </p>
      </div>
    </div>
  )
}
