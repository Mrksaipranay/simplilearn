'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { submitRsvp } from '@/app/actions';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';

const initialState = {
    message: '',
    error: false
}

export function BehindCurtain() {
    // @ts-ignore
    const [state, formAction] = useFormState(submitRsvp, initialState);
    const [pending, setPending] = useState(false);

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-4 leading-tight">
                            Go behind the curtain with real examples and high-scale insights
                        </h2>
                        <h3 className="text-xl font-bold mb-8 text-[#001D4A]">You'll walk away with:</h3>

                        <ul className="space-y-6 mb-10 text-gray-700">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                                <span className="text-lg leading-relaxed">A clear view of the capabilities that business leaders will demand from their organizations.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                                <span className="text-lg leading-relaxed">Insights from high-performing teams who have shifted focuses and budgets delivered real value.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                                <span className="text-lg leading-relaxed">Ready-to-deploy frameworks for upskilling your workforce at scale.</span>
                            </li>
                        </ul>

                        <p className="mb-6 font-medium text-gray-900">
                            You can RSVP directly by emailing <a href="mailto:attend@simplilearn.net" className="text-blue-600 underline decoration-blue-600/30 hover:decoration-blue-600">attend@simplilearn.net</a> or:
                        </p>

                        <form action={(formData) => {
                            // We need to bind the action or handle the pending state logic correctly here if we are unwrapping it from useFormState in a complex way.
                            // But since we are using useFormState 'formAction' in the hook, we can just pass that.
                            // However, if we want the "pending" state for the whole form, we might need the handle.
                            // For simplicity/robustness, we'll keep the direct action call or the wrapper if previously used.
                            // We will re-use the exact previous working logic.
                            setPending(true);
                            formAction(formData);
                            setTimeout(() => setPending(false), 1000);
                        }} className="flex flex-col sm:flex-row gap-3 max-w-md">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter your work email"
                                required
                                className="flex-1 bg-white border-gray-300 h-12 text-base"
                            />
                            <Button type="submit" variant="rsvp" disabled={pending} className="bg-[#FDB931] hover:bg-yellow-500 text-black font-bold uppercase tracking-wide px-6 h-12 shadow-lg whitespace-nowrap">
                                {pending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                RSVP NOW
                            </Button>
                        </form>
                        {state.message && (
                            <div className={`mt-3 text-sm font-medium ${state.error ? 'text-red-600' : 'text-green-700'}`}>
                                {state.message}
                            </div>
                        )}
                    </div>

                    <div className="lg:w-1/2 relative h-[500px] w-full">
                        {/* Chess pieces abstract image */}
                        <Image
                            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop"
                            alt="Strategic Chess Pieces"
                            fill
                            className="object-contain lg:object-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
